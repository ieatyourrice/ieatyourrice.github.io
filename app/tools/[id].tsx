
import { useRouter } from 'next/router';
import { toolsData } from '@/lib/toolsData';
import { useState } from 'react';

const ToolPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const tool = toolsData.find((t) => t.id === id);

  const [inputs, setInputs] = useState<string[]>(tool?.inputs.map(() => '') || []);
  const [result, setResult] = useState<string | null>(null);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Tool not found</p>
      </div>
    );
  }

  const handleChange = (value: string, index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const handleCalculate = () => {
    if (tool.logic) {
      setResult(tool.logic(inputs));
    } else {
      setResult('No calculation logic available.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{tool.title}</h1>
        <p className="text-gray-600 mb-6">{tool.description}</p>
        <img src={tool.icon} alt={tool.title} className="mx-auto w-16 h-16 mb-4" />

        {/* Dynamische Eingabefelder */}
        <div className="space-y-4">
          {tool.inputs.map((label, index) => (
            <input
              key={index}
              type="text"
              placeholder={label}
              value={inputs[index]}
              onChange={(e) => handleChange(e.target.value, index)}
              className="px-4 py-2 border rounded-md w-full"
            />
          ))}
          <button
            onClick={handleCalculate}
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </div>

        {/* Ergebnisanzeige */}
        {result && <p className="mt-6 text-green-500 font-bold">{result}</p>}

        {/* Rücklink zur Startseite */}
        <a href="/" className="mt-4 text-blue-600 hover:underline block">&larr; Back to Home</a>
      </div>
    </div>
  );
};

export default ToolPage;
