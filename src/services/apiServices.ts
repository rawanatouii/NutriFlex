export const fetchData = async () => {
    const response = await fetch('cacapi');
    return response.json();
  };
  