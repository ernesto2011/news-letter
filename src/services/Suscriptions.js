export const sendSuscriber = async (fullname, email) => {
    const url = "https://api-crm-demo-fondita-1071953342310.us-central1.run.app/v1/leads";
  
    const data = {
      fullname,        
      email,          
      origin: "sitio web", 
      branch: "66ec993eb7c1950af0e33e7d",
      type: "suscriptor"
    };
  
    try {
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Datos enviados exitosamente:", result);
      return result;
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      throw error;
    }
  };
  