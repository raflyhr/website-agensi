/**
 * Utility for Mayar API integration (Sandbox Mode)
 */

declare global {
  interface Window {
    Mayar: any;
  }
}

export interface MayarPaymentRequest {
  name: string;
  email: string;
  mobile: string;
  amount: number;
  description: string;
}

/**
 * Ensures Mayar script is loaded
 */
export const getMayar = () => {
  return new Promise<any>((resolve, reject) => {
    if (window.Mayar) {
      resolve(window.Mayar);
      return;
    }

    // Menggunakan script sandbox Mayar
    const scriptUrl = "https://app.mayar.club/js/mobile-checkout/mayar-checkout.js";

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {
      setTimeout(() => {
        if (window.Mayar) resolve(window.Mayar);
        else resolve(null); // Fallback to redirect if object not ready
      }, 200);
    };
    script.onerror = () => reject(new Error("Failed to load Mayar script."));
    document.head.appendChild(script);

    // Timeout loading script
    setTimeout(() => resolve(null), 3500);
  });
};

/**
 * Handle Mayar Popup Checkout
 */
export const openMayarPopup = async (token: string, fallbackUrl: string) => {
  // Langsung redirect ke payment link untuk menghindari script popup yang usang/bermasalah
  window.location.href = fallbackUrl;
};

/**
 * Simulation of Session Creation
 */
export const createMayarSession = async (data: MayarPaymentRequest, apiKey: string) => {
  console.log("Mock session (Sandbox) for:", data.name);
  
  return {
    status: "success",
    data: {
      token: "sandbox_token_" + Date.now(),
      /**
       * 💡 TIPS: Menggunakan link langsung ke portal Anda
       */
      redirect_url: `https://rafly-hr-46484.myr.id/payme` 
    }
  };
};
