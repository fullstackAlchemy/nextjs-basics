import Hello from "../components/hello";


export default function Home() {
  console.log('What am i? -- SERVER/CLIENT')
  return (
    <>
      <h1 className="text-3xl">WELCOME TO NEXTJS</h1>
      <Hello/>
    </>
    
  );
}
