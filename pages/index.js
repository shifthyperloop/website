import Layout from '../components/Layout/Layout';
import TopImage from '../components/TopImage/TopImage';
import ImageTextSection from '../components/page/home/ImageSection/ImageSection';
import TextSection from '../components/page/home/TextSection/TextSection';
import Tabs from '../components/page/home/Tabs/Tabs';
import Goals from '../components/page/home/Tabs/tab/Goals';
import Values from '../components/page/home/Tabs/tab/Values';
import UN from '../components/page/home/Tabs/tab/UN';

const HomePage = () => {
  return (
    <Layout>
      <div>
        <TopImage
          image="/images/homePage/PodTop.jpg"
          brightness={1}
          fixedOnMobile={false}
        />
      </div>
      <ImageTextSection
        src="/images/homePage/meili.jpg"
        alt="Shift hyperloop pod Meili"
        imageRight
      >
        <TextSection
          title="About Shift"
          moreUrl="/about"
          text={`
            Shift Hyperloop is an independent non-profit organization founded by
            students at the Norwegian University of Science and Technology (NTNU)
            in Trondheim. We operate on a 1-year cycle where each year we enlist 
            a new team that are tasked with designing and building a hyperloop pod
            that will compete in the European Hyperloop Week (EHW).
          `}
        />
      </ImageTextSection>
      <ImageTextSection
        src="/images/homePage/Contact-hyperloop.png"
        alt="Hyperloop"
      >
        <TextSection
          title="What is hyperloop?"
          moreUrl="/abouthyperloop"
          text={`
            Hyperloop is a technology where a vehicle, called a "pod", moves
            through a tube with low air pressure by levitating over the tracks.
            This minimizes the friction losses, something that makes the
            technology very energy efficient. The technology will make it possible
            to transport humans and cargo at speeds of about 1000 km/h. That makes
            it possible to travel a distance equal to Oslo-Trondheim in under half
            an hour!
          `}
        />
      </ImageTextSection>
      <ImageTextSection
        src="/images/homePage/EHW.jpg"
        alt="European Hyperloop Week"
        imageRight
      >
        <TextSection
          title="Hyperloop Competition"
          text={`
            European Hyperloop Week is the most important competition 
            for Shift. In EHW we get to showcase our hyperloop prototype and 
            prove ourselves in competition against other hyperloop teams. 
            It’s hosted a different place in Europe every year, and in 2022 
            it will be hosted in the Netherlands.
          `}
        />
      </ImageTextSection>
      <Tabs
        tabs={[
          { title: 'Goals', content: <Goals /> },
          { title: 'Values', content: <Values /> },
          { title: 'UN', content: <UN /> },
        ]}
      />
    </Layout>
  );
};

export default HomePage;
