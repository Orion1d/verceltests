
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/products/OptimizedImage";
import ProductsSkeleton from "./products/ProductsSkeleton";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaPluginType as LoosePluginType } from "embla-carousel";

const ProductShowcase = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();
  
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) throw error;
      return data || [];
    }
  });
  
  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };
  
  useEffect(() => {
    if (api) {
      api.scrollTo(0);
    }
  }, [products, api]);
  
  if (isLoading) {
    return <ProductsSkeleton />;
  }
  
  if (products.length === 0) {
    return null;
  }
  
  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: false
  }) as unknown as LoosePluginType;
  
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-700 ease-in-out py-[20px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary dark:text-white transform hover:scale-105 transition-transform duration-300">
          {t('products.title')}
        </h2>
        
        <div className="w-full max-w-7xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1
            }} 
            plugins={[autoplayPlugin]} 
            setApi={setApi} 
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map(product => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="cursor-pointer overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 z-10" 
                    onClick={() => handleProductClick(product.id)}
                  >
                    {product.photo_url && (
                      <div className="relative h-72 w-full overflow-hidden rounded-t-lg">
                        <OptimizedImage
                          src={product.photo_url.split(',')[0]?.trim() || ''}
                          alt={language === 'tr' ? product.name_tr || product.name : product.name}
                          className="w-full h-full"
                          onError={() => console.info(`Product showcase image failed to load for: ${product.name}`)}
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary dark:text-white text-center hover:text-secondary transition-colors duration-300">
                        {language === 'tr' ? product.name_tr || product.name : product.name}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 hover:scale-110 transition-transform duration-300" />
            <CarouselNext className="hidden md:flex -right-12 hover:scale-110 transition-transform duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
