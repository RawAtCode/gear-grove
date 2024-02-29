'use client';
import { useState, useEffect } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';
import { Slider } from './ui/slider';
import Bike from './Bike';


const BikeCategories = ({bikes}) => {
    const [category, setCategory] = useState('all');
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [price, setPrice] = useState(350000);

    useEffect(() => {
        const filtered = bikes.filter((bike) => {
            const categoryMatch = 
                category === 'all'
                ? bikes
                : bike.categories.some((categ) => categ.name === category);
            const priceMatch = bike.price <= price;
            return categoryMatch && priceMatch;
        });
        setFilteredBikes(filtered);
    }, [category, price, bikes]);

  return (
    <section className='min-h-[1200px] py-1'>
        <div className="container mx-auto">
            <div className="flex flex-col">
                {/* sidebar */}
                <aside className='w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
                    <RadioGroup defaultValue='all' className="flex flex-col gap-6 mb-12">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value='all' id='all' onClick={() => setCategory('all')} />
                            <label htmlFor="All">All</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value='Touring' id='Touring' onClick={() => setCategory('Touring')}/>
                            <label htmlFor="Touring">Touring</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value='Cruiser' id='Cruiser' onClick={() => setCategory('Cruiser')} />
                            <label htmlFor="Cruiser">Cruiser</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value='Sport' id='Sport' onClick={() => setCategory('Sport')} />
                            <label htmlFor="Sport">Sport</label>
                        </div>
                    </RadioGroup>
                    {/* price slider */}
                    <div className='max-w-56'>
                        <div className='text-lg mb-4 font-medium'>
                            Max Price:{' '} 
                            <span className='text-accent font-semibold ml-2'>₹{price}</span>
                            <span className='ml-2'>
                                ({ filteredBikes.length > 1
                                ? `${filteredBikes.length} items`
                                : filteredBikes === 0
                                ? `${filteredBikes.length} items`
                                : `${filteredBikes.length} item`}
                                )
                            </span>
                        </div>
                        <Slider
                            defaultValue={[150000]}
                            max={500000}
                            step={1000}
                            onValueChange={(val) => setPrice(val[0])}
                        />
                    </div>
                </aside>
                {/* bike list */}
                <div className="w-full xl:w-[1050px] ml-auto">
                    <div className="grid">
                        {filteredBikes.map((bike) => {
                            return <Bike bike={bike} key={bike.price_id} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BikeCategories