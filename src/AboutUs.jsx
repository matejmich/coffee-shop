import { useEffect, useState } from 'react';
import southAmerica from './south_america.png';
import centralAmerica from './central_america.png';
import africa from './africa.png';
import middleEast from './middle_east.png';
import asia from './asia.png';

function AboutUs() {
  const [showDivs, setShowDivs] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDivs(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Where do we get the right coffee for you?</h1>
      <div className="divide-y divide-gray-200 space-y-4">
        {[
          { img: southAmerica, alt: 'south america', divContent: "Intoxicating, good body, sweet flavor…are words most commonly used to describe South American coffees — and we have to agree! South American coffees are renowned for their aromatics and stunningly smooth, textured bodies. Grown on soaring mountain ranges, in rich volcanic soil, beneath old growth forests, and graced with stabilizing ocean winds, it's no wonder that South America is a prime supplier for the global coffee market. Alone or part of a blend, we encourage you to explore the rich and diverse world of South American coffe" },
          { img: centralAmerica, alt: 'central america', divContent: "Central American coffee is known for its high quality and distinctive flavor profiles. Coffee from this region is typically grown at high elevations in the mountains, which provides ideal conditions for coffee production. The volcanic soils and cool, wet climate of Central America are well-suited to growing coffee, and the region is home to some of the world's best coffee-growing regions, including Costa Rica, Guatemala, and El Salvador." },
          { img: africa, alt: 'africa', divContent: "Africa produces about 12% of the world's coffee supply, with much of it coming from East Africa. This incredible region has the perfect climate and soil conditions to produce luxurious, rich flavors. The volcanic soil, combined with high altitudes and closeness to the equator, creates a unique growing environment. These conditions allow African coffee farmers to produce some of the most outstanding specialty beans anywhere. And with such a long history of coffee cultivation, countries like Ethiopia and Kenya have highly-skilled farmers and workers. Coffee experts routinely choose African coffee as the best in the world." },
          { img: asia, alt: 'asia', divContent: "Silky, rich, earthy, spicy, savory, and wild are the words most commonly used to describe Southeast Asia's extraordinary arabica coffees. Spanning multiple bodies of water and countless, soaring volcanic mountain ranges, Asia's dramatic climate and unadulterated old growth forests provide wonderful growing conditions for coffee. In many Asian coffee growing countries, such as Indonesia, the coffee trade is dominated by small, family farms that employ traditional growing and harvesting practices — meaning that the coffee, while not certified organic, is grown naturally. In this blog, we explore the prominent qualities of Asian coffee, broken down by country, highlighting key distinguishing characteristics." },
          { img: middleEast, alt: 'middle east', divContent: "In the Middle East, Arabia and North Africa, coffee (Qahwa) has been widely used to settle marriages, contracts, and blood feuds, it is seen as an offering of peace to end mutiny. In certain parts of the Middle East, Arabian coffee is used to greet those that come to visit. It is said that if someone refuses an offering of coffee when entering in one's home, then they are about to ask you for something very close to their heart, such as forgiveness or permission. If this is accepted, then Qahwa coffee is drank in celebration." },
        ].map(({ img, alt, divContent }, index) => (
          <div
            key={index}
            className={`flex items-center justify-center space-x-4 transition-all duration-500 delay-${100 * (index + 1)} ${showDivs ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}
          >
            {(index % 2 === 0) ? (
              <>
                <img src={img} alt={alt} className="w-40 h-60 rounded-md object-contain" style={{ filter: 'invert(11%) sepia(12%) saturate(2844%) hue-rotate(338deg) brightness(100%) contrast(90%)'}} />
                <div className="p-4 rounded-lg">{divContent}</div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-lg">{divContent}</div>
                <img src={img} alt={alt} className="w-40 h-60 rounded-md object-contain" style={{ filter: 'invert(11%) sepia(12%) saturate(2844%) hue-rotate(338deg) brightness(100%) contrast(90%)'}} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
