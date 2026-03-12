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
  try {
    const Mayar = await getMayar();
    
    // Jika script berhasil load dan mode popup didukung
    if (Mayar && typeof Mayar.openCheckout === 'function') {
      Mayar.openCheckout({
        token: token,
        type: 'modal'
      });
    } else {
      // Jika popup gagal/tidak didukung, langsung redirect ke link pembayaran
      window.location.href = fallbackUrl;
    }
  } catch (error) {
    window.location.href = fallbackUrl;
  }
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
       * 💡 TIPS: Menggunakan link langsung ke portal sandbox Anda
       */
      redirect_url: `https://rafly-hr-94664.myr.id/payme` 
    }
  };
};
