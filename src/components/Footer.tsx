
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear}{t('footer_copyright')} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
