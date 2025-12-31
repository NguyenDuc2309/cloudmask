export const ERROR_TYPES = {
  400: { 
    title: 'Bad Request', 
    message: 'The request could not be understood by the server.',
    link: 'https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/'
  },
  500: { 
    title: 'Internal Server Error', 
    message: 'The server encountered an unexpected error.',
    link: 'https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/'
  },
  502: { 
    title: 'Bad Gateway', 
    message: 'The web server reported a bad gateway error.',
    link: 'https://www.cloudflare.com/5xx-error-landing'
  },
  503: { 
    title: 'Service Unavailable', 
    message: 'The server is temporarily unavailable.',
    link: 'https://www.cloudflare.com/5xx-error-landing'
  },
};

export const detectErrorCode = (error) => {
  if (!error) return 500;
  
  const errorName = error.name?.toLowerCase() || '';
  
  if (errorName.includes('typeerror')) {
    return 400;
  }
  
  if (errorName.includes('referenceerror')) {
    return 400;
  }
  
  if (errorName.includes('syntaxerror')) {
    return 400;
  }
  
  if (errorName === 'error') {
    return 502;
  }
  
  return 500;
};

export const generateRayId = () => {
  return Array.from({ length: 16 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

export const formatUTCTime = () => {
  const now = new Date();
  return now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
};
