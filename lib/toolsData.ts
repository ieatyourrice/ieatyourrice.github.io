
export const toolsData = [
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    description: 'Calculate your Body Mass Index quickly and easily.',
    icon: '/icons/scale.svg',
    inputs: ['Height (in meters)', 'Weight (in kg)'],
    logic: (inputs) => {
      const [height, weight] = inputs.map(parseFloat);
      if (height > 0 && weight > 0) {
        return `Your BMI is ${(weight / (height * height)).toFixed(2)}`;
      }
      return 'Please enter valid height and weight values.';
    },
  },
  {
    id: 'verzugszinsenrechner',
    title: 'Verzugszinsenrechner',
    description: 'Calculate default interest on late payments.',
    icon: '/icons/calculator.svg',
    inputs: ['Amount owed (in €)', 'Days overdue'],
    logic: (inputs) => {
      const [amount, days] = inputs.map(parseFloat);
      const rate = 0.05; // Beispielzins
      if (amount > 0 && days > 0) {
        const interest = (amount * rate * days) / 365;
        return `Default interest: €${interest.toFixed(2)}`;
      }
      return 'Please enter valid amount and days.';
    },
  },
  // Weitere Tools können hier ergänzt werden
];
