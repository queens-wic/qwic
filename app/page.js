import Header from "./HeaderFooter/components/Header";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>QWIC Website</h1>
      </main>
    </div>
  );
}
