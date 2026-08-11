export interface Partner {
  name: string;
  localName: string;
  letter: string;
}

/** Company names only — real logos will be added by the client later. */
export const partners: Partner[] = [
  { name: "Mahan Air", localName: "هواپیمایی ماهان", letter: "M" },
  { name: "Pars Khodro", localName: "پارس خودرو", letter: "P" },
  { name: "Mihan", localName: "میهن", letter: "M" },
  { name: "Farmand", localName: "فرمند", letter: "F" },
  { name: "Shirin Asal", localName: "شیرین عسل", letter: "S" },
];
