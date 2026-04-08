import { useState, useRef, useEffect } from 'react';
import { Upload, Download, Image as ImageIcon, Scissors, Loader2, RotateCcw, AlertCircle, Menu, X, ChevronDown } from 'lucide-react';
import { Button, Card, Label, RadioGroup, RadioGroupItem } from './components/ui-components';
import { removeBackground } from '@imgly/background-removal';
import { Toaster, toast } from 'sonner';

type SizeRatio = '2x3' | '3x4' | '4x6';
type BackgroundColor = 'white' | 'red' | 'blue' | 'grey' | 'black';

interface SizeConfig {
  width: number;
  height: number;
  label: string;
}

const SIZE_CONFIGS: Record<SizeRatio, SizeConfig> = {
  '2x3': { width: 400, height: 600, label: '2x3 (Passport)' },
  '3x4': { width: 450, height: 600, label: '3x4 (Standard)' },
  '4x6': { width: 600, height: 900, label: '4x6 (Photo)' },
};

const BACKGROUND_COLORS: Record<BackgroundColor, { hex: string; label: string }> = {
  white: { hex: '#FFFFFF', label: 'Putih' },
  red: { hex: '#DC2626', label: 'Merah' },
  blue: { hex: '#2563EB', label: 'Biru' },
  grey: { hex: '#6B7280', label: 'Abu-abu' },
  black: { hex: '#000000', label: 'Hitam' },
};

export default function App() {
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(null);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeRatio>('3x4');
  const [selectedColor, setSelectedColor] = useState<BackgroundColor>('white');
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isRemovingBackground, setIsRemovingBackground] = useState(false);
  const [backgroundRemoved, setBackgroundRemoved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        setOriginalImage(img);
        setBackgroundRemoved(false);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!uploadedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = SIZE_CONFIGS[selectedSize];
    canvas.width = config.width;
    canvas.height = config.height;

    // Fill background
    ctx.fillStyle = BACKGROUND_COLORS[selectedColor].hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate image dimensions to cover (fill) the entire canvas
    const scale = Math.max(
      canvas.width / uploadedImage.width,
      canvas.height / uploadedImage.height
    );
    const scaledWidth = uploadedImage.width * scale;
    const scaledHeight = uploadedImage.height * scale;

    // Center the image
    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;

    ctx.drawImage(uploadedImage, x, y, scaledWidth, scaledHeight);

    // Update preview
    setPreviewUrl(canvas.toDataURL('image/jpeg', 0.95));
  }, [uploadedImage, selectedSize, selectedColor]);

  const handleDownload = () => {
    if (!previewUrl) return;

    const link = document.createElement('a');
    link.download = `photo-${selectedSize}-${selectedColor}.jpg`;
    link.href = previewUrl;
    link.click();
  };

  const handleRemoveBackground = async () => {
    if (!uploadedImage || isRemovingBackground) return;

    setIsRemovingBackground(true);
    toast.info('Memproses gambar...', {
      description: 'Menghapus background, mohon tunggu sebentar'
    });

    try {
      const blob = await removeBackground(uploadedImage.src);
      const url = URL.createObjectURL(blob);
      
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        setBackgroundRemoved(true);
        setIsRemovingBackground(false);
        toast.success('Background berhasil dihapus!', {
          description: 'Pilih warna background baru untuk foto Anda'
        });
      };
      img.onerror = () => {
        setIsRemovingBackground(false);
        toast.error('Gagal memproses gambar', {
          description: 'Silakan coba lagi'
        });
      };
      img.src = url;
    } catch (error) {
      console.error('Error removing background:', error);
      setIsRemovingBackground(false);
      toast.error('Gagal menghapus background', {
        description: 'Terjadi kesalahan saat memproses gambar'
      });
    }
  };

  const handleRestoreOriginal = () => {
    if (originalImage) {
      setUploadedImage(originalImage);
      setBackgroundRemoved(false);
      toast.info('Foto asli telah dipulihkan');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      <Toaster position="top-center" richColors />
      
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 backdrop-blur-lg shadow-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transform transition-transform hover:scale-105 duration-300">
              <a href="https://www.binarydigiprint.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://www.binarydigiprint.com/wp-content/uploads/2023/08/binary-logo-revisi-1-300x52.png" 
                  alt="Binary Digiprint Logo" 
                  className="h-11 drop-shadow-md"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                <a 
                  href="https://www.binarydigiprint.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
                
                {/* Produk Kami Dropdown */}
                <div 
                  className="relative" 
                  onMouseEnter={() => setDropdownOpen(true)} 
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 inline-flex items-center group">
                    <span className="relative z-10">Produk Kami</span>
                    <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                  </button>
                  
                  {/* Dropdown Menu with Animation */}
                  <div className={`absolute left-0 mt-3 w-56 transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
                    <div className="rounded-xl shadow-2xl bg-white/95 backdrop-blur-lg ring-1 ring-black/5 overflow-hidden border border-white/20">
                      <div className="py-2">
                        <a 
                          href="https://www.binarydigiprint.com/digitalprinting/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                          Digital Printing
                        </a>
                        <a 
                          href="https://www.binarydigiprint.com/buku-tahunan/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        >
                          <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                          Buku Tahunan
                        </a>
                        <a 
                          href="https://www.binarydigiprint.com/company-profile/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        >
                          <span className="w-2 h-2 rounded-full bg-pink-400 mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                          Company Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="https://www.binarydigiprint.com/gallery/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Gallery</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
                <a 
                  href="https://www.binarydigiprint.com/portfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Portfolio</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
                <a 
                  href="https://www.binarydigiprint.com/tentang-kami/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Tentang Kami</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
                <a 
                  href="https://www.binarydigiprint.com/contact/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
                <a 
                  href="https://www.binarydigiprint.com/artikel/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-white/60 hover:shadow-md hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">Artikel</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-lg transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/60 focus:outline-none transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 shadow-xl">
            <div className="px-3 pt-3 pb-4 space-y-2">
              <a 
                href="https://www.binarydigiprint.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Home
              </a>
              
              {/* Produk Kami with submenu */}
              <div className="bg-gray-50/50 rounded-xl p-2">
                <div className="text-gray-800 font-bold block px-3 py-2 text-base">
                  Produk Kami
                </div>
                <div className="space-y-1 mt-1">
                  <a 
                    href="https://www.binarydigiprint.com/digitalprinting/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-white/80 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                    Digital Printing
                  </a>
                  <a 
                    href="https://www.binarydigiprint.com/buku-tahunan/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-white/80 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                    Buku Tahunan
                  </a>
                  <a 
                    href="https://www.binarydigiprint.com/company-profile/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-600 hover:text-blue-600 hover:bg-white/80 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></span>
                    Company Profile
                  </a>
                </div>
              </div>
              
              <a 
                href="https://www.binarydigiprint.com/gallery/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Gallery
              </a>
              <a 
                href="https://www.binarydigiprint.com/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Portfolio
              </a>
              <a 
                href="https://www.binarydigiprint.com/tentang-kami/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Tentang Kami
              </a>
              <a 
                href="https://www.binarydigiprint.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Contact Us
              </a>
              <a 
                href="https://www.binarydigiprint.com/artikel/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 hover:shadow-md hover:translate-x-1"
              >
                Artikel
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Photo Resizer
          </h1>
          <p className="text-gray-600">
            Ubah ukuran pas foto anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Panel - Controls */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Pengaturan</h2>

            {/* Upload Section */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">Upload Foto</Label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="w-full"
                size="lg"
                variant={uploadedImage ? "outline" : "default"}
              >
                <Upload className="mr-2 h-5 w-5" />
                {uploadedImage ? 'Ganti Foto' : 'Pilih Foto'}
              </Button>
            </div>

            {/* Remove Background Button */}
            {uploadedImage && (
              <div className="mb-6">
                <Label className="text-base font-medium mb-3 block">Hapus Latar Belakang</Label>
                <Button
                  onClick={handleRemoveBackground}
                  className="w-full"
                  size="lg"
                  variant="secondary"
                  disabled={isRemovingBackground}
                >
                  {isRemovingBackground ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sedang Memproses...
                    </>
                  ) : (
                    <>
                      <Scissors className="mr-2 h-5 w-5" />
                      Hapus Background
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Restore Original Button */}
            {backgroundRemoved && (
              <div className="mb-6">
                <Label className="text-base font-medium mb-3 block">Pulihkan Foto Asli</Label>
                <Button
                  onClick={handleRestoreOriginal}
                  className="w-full"
                  size="lg"
                  variant="secondary"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Pulihkan Asli
                </Button>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">Ukuran Foto</Label>
              <RadioGroup
                value={selectedSize}
                onValueChange={(value) => setSelectedSize(value as SizeRatio)}
              >
                {Object.entries(SIZE_CONFIGS).map(([key, config]) => (
                  <div key={key} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={key} id={`size-${key}`} />
                    <Label htmlFor={`size-${key}`} className="cursor-pointer">
                      {config.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Background Color Selection */}
            <div className="mb-6">
              <Label className="text-base font-medium mb-3 block">Warna Background</Label>
              <div className="grid grid-cols-5 gap-3">
                {Object.entries(BACKGROUND_COLORS).map(([key, color]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedColor(key as BackgroundColor)}
                    className={`w-full aspect-square rounded-lg border-4 transition-all ${
                      selectedColor === key
                        ? 'border-indigo-600 scale-105'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {BACKGROUND_COLORS[selectedColor].label}
              </p>
            </div>

            {/* Download Button */}
            {uploadedImage && (
              <Button
                onClick={handleDownload}
                className="w-full"
                size="lg"
                disabled={!previewUrl}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Foto
              </Button>
            )}
          </Card>

          {/* Right Panel - Preview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Preview</h2>
            <div className="flex items-center justify-center min-h-[500px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              {uploadedImage ? (
                <div className="flex flex-col items-center">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-w-full max-h-[600px] rounded-lg shadow-lg"
                  />
                  <p className="text-sm text-gray-500 mt-4">
                    {SIZE_CONFIGS[selectedSize].label} - {BACKGROUND_COLORS[selectedColor].label}
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <ImageIcon className="mx-auto h-16 w-16 mb-4" />
                  <p className="text-lg">Upload foto untuk melihat preview</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Hidden Canvas for Processing */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Copyright Footer */}
        <footer className="text-center mt-8 py-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} <a 
              href="https://www.binarydigiprint.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              binarydigiprint.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}