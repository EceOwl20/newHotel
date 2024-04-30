'use-client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FOOTER_LINK, SOCIALS } from '../constants'


const Footer = () => {
    return (
        <footer className=' bg-lime-900'>
            <div className='padding-container justify-center text-center max-container flex w-full flex-col gap-14'>
                <div className='flex flex-col items-center justify-center gap-[10%] '>
                    <div className="flex p-5 flex-col justify-center items-center w-full bg-[url('https://miramarehotels.com/assets/frontend/images/footer/phone-footer.webp')]">
                        <Image className='' src="https://miramarehotels.com/assets/frontend/images/header/miramare-logo.svg" alt="logo" width={250} height={250} style={{objectFit: "contain"}} />
                        <Link href="/" className='text-white text-xs mt-5'>
                            <p >Social Platforms Privacy Policy</p>
                        </Link>
                        <div className='flex flex-col gap-5 mb-5 text-lime-900'>
                            <FooterColumn title={SOCIALS.title}>
                                <ul className='regular-14 flex gap-4 '>
                                    {SOCIALS.links.map((link) => (
                                        <Link href="/" key={link}>
                                            <Image src={link} alt="logo" width={15} height={15} />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-10 justify-center mt-5
                     text-white text-center text-sm'>
                        {FOOTER_LINK.map((columns) => (
                            <FooterColumn title={columns.title}>
                                <ul className=' flex flex-col gap-1'>
                                    {columns.links.map((link) => (
                                        <Link href="/" key={link}>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}


                    </div>

                </div>
            </div>
            <div className='border mt-7 bg-black'>
                <p className='regular-14 text-xs  text-center text-gray-500'>Miramare Hotels Zafer Turizm Otelcilik İnşaat A.Ş.</p>
                <p className='regular-14 text-xs text-center text-gray-500'>Powered by DGTLFACE | All rights reserved</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className='flex-col items-center justify-center gap-5 text-center'>
            <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    )
}

export default Footer


//https://miramarehotels.com/assets/frontend/images/footer/phone-footer.webp
/**<div className='flex flex-col gap-5'>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link href="/" key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                                        <p className='whitespace-nowrap'>
                                            {link.label}:
                                        </p>
                                        <p className='medium-14 whitespace-nowrap text-blue-400' >
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div> */