export type Plan = {
  title: string;
  price: {
    monthly: number;
    annually: number;
  };
  plan: {
    storage: string;
    allowedUsers: number;
    sendLimit: string;
  };
};
