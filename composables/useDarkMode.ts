import { ref, watch, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  };

  onMounted(() => {
    // Check if dark mode preference exists in localStorage
    const darkModePreference = localStorage.getItem('dark-mode');
    
    // If preference exists and is true, enable dark mode
    if (darkModePreference === 'true') {
      isDarkMode.value = true;
      document.documentElement.classList.add('dark');
    } 
    // If no preference, check system preference
    else if (darkModePreference === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkMode.value = true;
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      }
    }
  });

  return {
    isDarkMode,
    toggleDarkMode
  };
}
