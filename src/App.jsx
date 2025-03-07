import './App.css'
import Carousel from './Carousel'
import RevealY from './RevealY'
import RevealX from './RevealX'
import { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function App() {

  useEffect(() => {
    document.title = 'White & Case'
  })

  const [isMenuShowing, setIsMenuShowing] = useState(false)

  return (
    <main>
      <header className='flex justify-center bg-black'>
        <div className="flex items-center w-[100%] max-w-[1248px] p-5 justify-between">
          <img src='/images/logo.svg' className='block w-[145px] h-[auto]' />
          <div className='lg:hidden'>
            <ul className='flex items-center text-white gap-5'>
              <li><a className='hover:text-[#dec985]' href="#">Home</a></li>
              <li><a className='hover:text-[#dec985]' href="#areas">Áreas de atuação</a></li>
              <li><a className='hover:text-[#dec985]' href="#">Sobre</a></li>
              <li><a className='hover:text-[#dec985]' href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className='lg:block hidden'>
            <div className='text-white' onClick={() => setIsMenuShowing(state => !state)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
      {isMenuShowing && 
      <motion.div
          initial={{ height: 0,}}
          animate={{ height: 'auto'}}
          transition={{ duration: 0.3 }}
          exit={{height:0}}
      >
        <div className="bg-black">
          <ul className='py-2 text-white gap-5'>
              <li className='px-4 border-b py-2'><a className='hover:text-[#dec985]' href="#">Home</a></li>
              <li className='px-4 border-b py-2'><a className='hover:text-[#dec985]' href="#areas">Áreas de atuação</a></li>
              <li className='px-4 border-b py-2'><a className='hover:text-[#dec985]' href="#">Sobre</a></li>
              <li className='px-4 py-2'><a className='hover:text-[#dec985]' href="#contact">Contato</a></li>
          </ul>
        </div>
      </motion.div>
      }
      </AnimatePresence>

      <div className='h-[90vh] bg-top relative lg:h-[50vh] bg-cover' style={{backgroundImage: "url(/images/lawyers.jpg)", backgroundPositionY: '15%'}}>
        <div className="absolute w-[100%] h-[100%] bg-black opacity-40">
        </div>
        <div className='h-[100%] w-[100%] flex items-end px-10 pb-5 text-white relative z-40 text-6xl max-w-[30rem]'>
          <div>
            <div className='font-bebas border-b border-b-[#dec985] sm:text-2xl md:text-4xl pb-3'>
            Seu Caso Merece uma Defesa de Alto Nível.
            </div>
            <div className='flex justify-end mt-3'>
              <a href='#contact'><button className='uppercase bg-[#cfa51b] text-[15pt] p-4 rounded'>Entre em contato</button></a>
            </div>
          </div>
        </div>

      </div>

      <div className='p-10 bg-black text-white'>
        <h3 className='font-bebas text-center mb-10 text-5xl'>WHITE & CASE Escritório de Advocacia</h3>
        <div className='flex justify-center'>
          <div>
            <p className='max-w-[768px] text-[13pt] text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu libero, dictum in diam in, consequat pharetra magna. Integer finibus ligula ligula, ut iaculis diam varius at. Suspendisse quis rhoncus elit. Pellentesque fermentum ligula sed nulla commodo, nec convallis leo accumsan. Duis eu tellus est. Vivamus gravida dapibus sollicitudin. Vestibulum id mi mollis, mattis mi nec, eleifend ipsum. Proin maximus ultricies magna, vitae sollicitudin velit posuere quis. Maecenas consectetur tincidunt orci, vitae tempor nulla placerat id. Nulla ut pellentesque orci.
            </p>
          </div>
        </div>
        
      </div>
    
    <div className="p-10" id='areas' >
      <h2 className='text-6xl font-bebas mb-2 text-center'>O que nós fazemos</h2>
      <p className='text-center mb-10 text-2xl'>Áreas de atuação</p>
      <div className="flex justify-center">
        <div className='flex flex-wrap gap-4 justify-center max-w-[968px]'>

          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>
            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/business_formation.png" />
              <div>
                <p className='text-3xl font-bebas'>Formação de Empresas e Startups</p>
                <p>Nosso escritório de advocacia trabalha de perto com proprietários de pequenas e médias empresas desde o início.</p>
              </div>
            </div>
          </RevealY>
          </div>
      
          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>
            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/civil.png" />
              <div>
                <p className='text-3xl font-bebas'>Litígios Cíveis/Comerciais & MARD</p>
                <p>Nosso escritório de advocacia atua em litígios nos tribunais do condado de Montgomery, bem como em outros tribunais em todo o estado de Maryland e no Distrito de Columbia.</p>
              </div>
            </div>
          </RevealY>

          </div>
          
          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>
            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/contract.png" />
              <div>
                <p className='text-3xl font-bebas'>Análise de contrato</p>
                <p>Nosso escritório de advocacia redige, revisa, analisa e negocia diversos tipos de contratos em nome de clientes corporativos e franqueados.</p>
              </div>
            </div>
            </RevealY>

          </div>

          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>

            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/franchise.png" />
              <div>
                <p className='text-3xl font-bebas'>Atendimento a franquias</p>
                <p>Nosso escritório de advocacia é especializado em franquias. Para franqueadores iniciantes, respondemos a perguntas como "O que é uma franquia?" e "Como franquear meu negócio?".</p>
              </div>
            </div>
          </RevealY>

          </div>

          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>
            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/wills.png" />
              <div>
                <p className='text-3xl font-bebas'>Testamentos, Trusts e Planejamento Sucessório</p>
                <p>Nosso escritório de advocacia auxilia clientes com necessidades básicas de planejamento sucessório, incluindo a elaboração de testamentos, trusts, procurações e diretivas antecipadas de cuidados de saúde.</p>
              </div>
            </div>
          </RevealY>

          </div>

          <div className='bg-black rounded text-white p-5  max-w-[25rem]'>
          <RevealY>
            <div className="flex items-center gap-3">
              <img className='block w-[4rem]' src="/images/corporate.png" />
              <div>
                <p className='text-3xl font-bebas'>Advocacia corporativa</p>
                <p>Além de auxiliar empresas pequenas e médias, corporativas e de franquias com formação e início de atividades, litígios e direito contratual.</p>
              </div>
            </div>
          </RevealY>

          </div>
          <div className='flex justify-center mt-5'>
          <a href='#contact'><button className='uppercase bg-[#cfa51b] text-white text-[14pt] p-4 rounded'>Entre em contato</button></a>
          </div>
        </div>
      </div>
      
    </div>


    <div className='mt-10 bg-black text-white p-10'>
      <h1 className='font-bebas text-white text-5xl text-center mb-10'>NOSSOS NÚMEROS</h1>
      <div className='flex flex-wrap justify-center items-center gap-7'>
        <RevealX>

        <div className='min-w-[360px] h-[250px] border-8 border-[#dec985] bg-white text-black relative  justify-center' style={{
          'clipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)',
          'WebkitClipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)'
        }}>
          <div>
            <p className='text-[8rem] mb-[-2rem] text-center pr-3 text-black'>500</p>

            <div className='flex justify-center'>
              <p className='text-right text-xl max-w-[12rem]'>+ transações de private equity desde 2022</p>
            </div>

          </div>
        </div>
        </RevealX>

        <RevealX>

        <div className='min-w-[360px] h-[250px] border-8 border-[#dec985] bg-white text-black relative  justify-center' style={{
          'clipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)',
          'WebkitClipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)'
        }}>
          <div>
            <p className='text-[8rem] mb-[-2rem] text-center pr-3 text-black'>100</p>

            <div className='flex justify-end'>
              <p className='text-xl max-w-[15rem]'>+ bilhões em mercados de capital desde 2022</p>
            </div>

          </div>
        </div>
        </RevealX>

        <RevealX>

        <div className='min-w-[360px] h-[250px] border-8 border-[#dec985] bg-white text-black relative  justify-center' style={{
          'clipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)',
          'WebkitClipPath': 'polygon(0 0, 260px 0, 100% 100%, 100px 100%)'
        }}>
          <div>
            <p className='text-[8rem] mb-[-2rem] text-center pr-3 text-black'>700</p>

            <div className='flex justify-center'> 
              <p className='text-right text-xl max-w-[12rem]'>+ financiamentos desde 2022</p>
            </div>

          </div>
        </div>
        </RevealX>



      </div>
    </div>


    <div className='p-10'>
      <h3 className='text-5xl text-center font-bebas'>CLIENTES</h3>
      <div className='flex justify-center'>
        <Carousel>
          <div className='flex gap-10 shadow-md p-2'>
            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/tesla.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/times.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/coca.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/marvel.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-4 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/disney.svg" />
              </div>
            </div>
            
            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>

            <div>
              <div className='w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center'>
                <img draggable="false" className='' src="/images/sony.svg" />
              </div>
            </div>
          </div>

        </Carousel>
      </div>
    </div>


    <div className='p-10 bg-black md:px-3'>
      <h3 className='text-5xl text-center text-white mb-10'>NOSSO ESCRITÓRIO</h3>
      <div className="flex justify-center gap-10 flex-wrap px-10">
        <div className='w-[45%] sm:w-[100%]'>
        <RevealY>
          <img src='/images/predio.jpg' />
        </RevealY>
        </div>
        <div className='w-[45%] sm:w-[100%] text-white'>
        <RevealX>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu libero, dictum in diam in, consequat pharetra magna. Integer finibus ligula ligula, ut iaculis diam varius at. Suspendisse quis rhoncus elit. Pellentesque fermentum ligula sed nulla commodo, nec convallis leo accumsan. Duis eu tellus est. Vivamus gravida dapibus sollicitudin. Vestibulum id mi mollis, mattis mi nec, eleifend ipsum. Proin maximus ultricies magna, vitae sollicitudin velit posuere quis. Maecenas consectetur tincidunt orci, vitae tempor nulla placerat id. Nulla ut pellentesque orci.</p>
        </RevealX>
        <RevealX>
            <p className='mt-10'>Adipiscing elit. Nam arcu libero, dictum in diam in, consequat pharetra magna. Integer finibus ligula ligula, ut iaculis diam varius at. Suspendisse quis rhoncus elit. Pellentesque fermentum ligula sed nulla commodo, nec convallis leo accumsan. Duis eu tellus est. Vivamus gravida dapibus sollicitudin. Vestibulum id mi mollis, mattis mi nec, eleifend ipsum. Proin maximus ultricies magna, vitae sollicitudin velit posuere quis. Maecenas consectetur tincidunt orci, vitae tempor nulla placerat id. Nulla ut pellentesque orci.</p>
        </RevealX>
        </div>

      </div>
    </div>

    <div className='relative bg-cover bg-center' style={{backgroundImage: 'url(/images/cidade.jpg)'}}>
      <div className="absolute bg-black w-[100%] h-[100%] opacity-70"></div>
        <div id='contact'  className='p-10 pb-20 mx-auto max-w-[968px] relative z-10'>
          <h3 className='text-center text-6xl text-white mb-10'>ENTRE EM CONTATO</h3>
          <div className="flex flex-wrap-reverse">

            <div className="flex flex-wrap gap-10 justify-center lg:mt-10 lg:w-[100%] w-[50%] text-white">
                <div>
                  <p className='font-bebas text-xl tracking-wider font-bold'>MANHATTAN</p>
                  <p className='font-bebas'>Borgo Demi 90 Appartamento 13</p>
                  <p className='font-bebas'>TEL: 876-919-9399</p>
                </div>

                <div>
                  <p className='font-bebas text-xl tracking-wider font-bold'>LOS ANGELES</p>
                  <p className='font-bebas'>Borgo Demi 90 Appartamento 13</p>
                  <p className='font-bebas'>TEL: 876-919-9399</p>
                </div>

                <div>
                  <p className='font-bebas text-xl tracking-wider font-bold'>BOSTON</p>
                  <p className='font-bebas'>Borgo Demi 90 Appartamento 13</p>
                  <p className='font-bebas'>TEL: 876-919-9399</p>
                </div>

            </div>

            <div className="w-[50%] lg:w-[100%] flex justify-center">
              <form action="" method='POST' className='md:max-w-[308px]'>
                <div className="flex flex-wrap items-center gap-4 justify-between">
                  <input name='name' className='lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2' placeholder='First Name *' />
                  <input name='last_name' className='lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2' placeholder='Last Name *' />
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-5 justify-between">
                  <input name='email' type='email' className='lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2' placeholder='E-mail address *' />
                  <input name='phone' type='tel' className='lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2' placeholder='Phone *' />
                </div>
                <textarea className='bg-white outline-none placeholder-gray-700 block p-3 py-2 mt-5 w-[100%]' placeholder='Message *' name="message" cols="30" rows="5"></textarea>
                <div className='flex justify-center'>
                  <button className='lg:w-[100%] hover:bg-black hover:opacity-70 border border-[#cfa51b] rounded-sm transition uppercase bg-[#cfa51b] text-[15pt] text-white mt-3 p-3 py-2'>Submit</button>
                </div>

              </form>
            </div>
          </div>

        </div>
    </div>

      
    </main>
  )
}

export default App
