import Image from 'next/image';
import lips from '../../public/3lips.jpg';
import eyes from "../../public/1eye.jpg";
import face from "../../public/2face.jpg";
import nails from "../../public/4nails.jpg";
import accessories from "../../public/5accessories.jpg";
import hair from "../../public/5hair.jpg";
import skin from "../../public/7skin.jpg";
import { FaRegHeart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import React from 'react'
import Link from 'next/link';

const Category = () => {
  return (
    <div>
        <h1 className="mb-4 text-3xl font-extrabold text-center text-myverydarkpink dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-myverydarkpink/90 from-pink-400">Category</span></h1>
        {/* <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div> */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-center -m-4">

      <div className="p-4 w-[280px]">
        <Link href={"/eyes"}>
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={eyes}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Eyes
            </h1>
            <p className="leading-relaxed mb-3  text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="p-4 w-[280px]">
        <Link href="/face">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={face}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Face
            </h1>
            <p className="leading-relaxed mb-3 text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="p-4 w-[280px]">
        <Link href="/lips">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={lips}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Lips
            </h1>
            <p className="leading-relaxed mb-3 text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="p-4 w-[280px]">
        <Link href="/nails">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={nails}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Nails
            </h1>
            <p className="leading-relaxed mb-3  text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="p-4 w-[280px]">
        <Link href="/accessories">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={accessories}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Accessories
            </h1>
            <p className="leading-relaxed mb-3 text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="p-4 w-[280px]">
        <Link href="/haircare">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={hair}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Hair Care
            </h1>
            <p className="leading-relaxed mb-3 text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="p-4 w-[280px]">
        <Link href="/skincare">
        <div className="h-full border border-gray-200 border-spacing-20 rounded-lg">
          <Image
            className="lg:h-48 md:h-36 w-[250px] object-cover object-center"
            src={skin}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-mynormalpink mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-myverydarkpink">
              Skin care
            </h1>
            <p className="leading-relaxed mb-3 text-myverydarkpink/70 line-clamp-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
            <h1 className="text-mydarkpink inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
              </h1>
              <span className="text-mynormalpink mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <FaRegHeart />
               5 K
              </span>
              <span className="text-mynormalpink inline-flex items-center leading-none text-sm">
                <LiaEyeSolid className='text-xl' />
                10 K
              </span>
            </div>
          </div>
        </div>
        </Link>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Category
