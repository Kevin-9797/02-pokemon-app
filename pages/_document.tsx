import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx:DocumentContext){
        const initialProps = await Document.getInitialProps(ctx);
        return { 
            ...initialProps,
            styles: <>{initialProps.styles}</>

         }
    }

  render() {
    return (
      <Html>
        <Head>
          {/* Coloca aquí tus etiquetas meta, enlaces a CSS, fuentes personalizadas, etc. */
            
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

