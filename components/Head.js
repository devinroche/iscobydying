import Head from 'next/head'

const Header = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>
        <style jsx global>{`
      body { 
        font: 18px Comic Sans MS;
        background-color: #ecf0f1;
        color: #8e44ad;
      }
      .container {
          margin: 30vh auto;
          width: 50vw;
          text-align: center;
      }
    `}</style>
    </div>
)

export default Header