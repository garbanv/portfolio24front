import React from 'react'
import Image from 'next/image'


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-10">
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://github.com/garbanv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/file.svg"
        alt="File icon"
        width={16}
        height={16}
      />
      Github
    </a>
{/*     <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/window.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
      Examples
    </a> */}
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://open.spotify.com/artist/0NnA3nCa5DWd2EgjeUbuoP?si=qmB870_nR6uOvdaiBaSIaQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
      My music 
    </a>
    <p>{currentYear}</p>
  </footer>
  )
}

export default  Footer
