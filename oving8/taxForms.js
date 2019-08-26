const taxForms = [
  {
    realName: "Bruce Wayne",
    income: 750000,
    wealth: 300000
  },
  {
    realName: "John Blake",
    income: 440000,
    wealth: 832000
  },
  {
    realName: "Selina Kyle",
    income: 640000,
    wealth: 432000
  }
];

for (hero=0; hero<taxForms.length; hero++) {
   if (taxForms[hero].income>=500000) {
      console.log(taxForms[hero].realName);
   }
}
