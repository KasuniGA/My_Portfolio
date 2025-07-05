// Utility function to get the correct asset path for GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.PROD ? '/My_Portfolio' : '';
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${basePath}/${cleanPath}`;
};

// Utility function to get the correct asset path for attached assets
export const getAttachedAssetPath = (filename: string): string => {
  const basePath = import.meta.env.PROD ? '/My_Portfolio' : '';
  return `${basePath}/attached_assets/${filename}`;
};
