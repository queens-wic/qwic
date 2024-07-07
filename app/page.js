import Header from "./HeaderFooter/components/Header";
import CardImg from "./HeaderFooter/components/card-img";
import CardText from "./HeaderFooter/components/card-text";
import Vector from '/Users/kavitathomas/Documents/qwic_dev/qwic/app/HeaderFooter/assets/Vector.png'; //replace this, works for testing purposes
import pic from '/Users/kavitathomas/Documents/qwic_dev/qwic/app/HeaderFooter/assets/img_7.png';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>QWIC Website</h1>
        <CardText 
          bcolor="dark-pink" 
          fcolor="light-pink" 
          title="Community" 
          body="A space for all women, underrepresented minorities, and anyone passionate about technology."
          img={Vector}
          more="Learn more"
        />
        <CardImg
          bcolor="dark-pink"
          fcolor="light-pink"
          img={pic}
        />
      </main>
    </div>
  );
}
