import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import '../i18n/client.ts';


const ClientText = ({ textKey }: { textKey: string }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{textKey}</>; 

  return <>{t(textKey)}</>;
};

export default ClientText;
