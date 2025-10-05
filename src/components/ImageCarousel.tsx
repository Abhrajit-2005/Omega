'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';
import car_image1 from '@/images/car_image1.jpg';
import car_image2 from '@/images/car_image2.jpg';
import car_image3 from '@/images/car_image3.jpg';
import car_image4 from '@/images/car_image4.jpg';
import car_image5 from '@/images/car_image5.jpg';

const carImages = [
    car_image1,
    car_image2,
    car_image3,
    car_image4,
    car_image5
];

interface ThumbProps {
    selected: boolean;
    imgSrc: StaticImageData;
    onClick: () => void;
    index: number;
}

const Thumb: React.FC<ThumbProps> = ({ selected, imgSrc, onClick, index }) => (
    <div
        className={`group flex-shrink-0 w-20 h-20 md:w-28 md:h-28 cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${selected
            ? 'ring-4 ring-blue-600 ring-offset-2 scale-105 shadow-xl'
            : 'ring-2 ring-gray-200 hover:ring-blue-400 hover:scale-105 shadow-md hover:shadow-lg'
            }`}
    >
        <div className="relative w-full h-full">
            <Image
                onClick={onClick}
                src={imgSrc}
                alt={`Car thumbnail ${index + 1}`}
                width={120}
                height={120}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {selected && (
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>
            )}
            <div className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${selected ? 'bg-blue-600 text-white scale-100' : 'bg-white/80 text-gray-600 scale-0 group-hover:scale-100'
                }`}>
                {index + 1}
            </div>
        </div>
    </div>
);

export default function ImageCarousel() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onThumbClick = useCallback((index: number) => {
        if (!emblaApi) return;
        emblaApi.scrollTo(index);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
        return () => { emblaApi.off('select', onSelect); }
    }, [emblaApi]);

    return (
        <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 via-indigo-50 to-transparent opacity-40 rounded-full blur-3xl -z-0"></div>

            <div className="relative group mb-6">
                <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200" ref={emblaRef}>
                    <div className="flex">
                        {carImages.map((src, index) => (
                            <div className="flex-shrink-0 w-full relative" key={index}>
                                <div className="relative aspect-[16/10] md:aspect-[16/9] bg-gray-100">
                                    <Image
                                        src={src}
                                        alt={`1994 Toyota Supra - View ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    />
                                </div>
                                <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-bold shadow-lg">
                                    {index + 1} / {carImages.length}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-blue-500"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/95 backdrop-blur-sm hover:bg-white rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-blue-500"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="relative">
                <div className="flex items-center justify-center gap-4 px-4 overflow-x-auto pb-2 scrollbar-hide">
                    {carImages.map((src, index) => (
                        <Thumb
                            key={index}
                            onClick={() => onThumbClick(index)}
                            selected={index === selectedIndex}
                            imgSrc={src}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-6 md:hidden">
                {carImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onThumbClick(index)}
                        className={`transition-all duration-300 rounded-full ${index === selectedIndex
                            ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-indigo-600'
                            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}