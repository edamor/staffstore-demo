import Head from "next/head";

export const Meta = ({ title }) => {

    return (
      <>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon-32.png" />
          <title>{`${title} | Staffstore Inc`}</title>
          <meta 
            name="description" 
            content="We are an authorized distributor of Cofta Original Monobloc Products like Various Cofta chairs, Cofta Tables, Cofta Plastic Pallets, Versaboards and more. Cofta is the leading plastic furniture brand all over the Philippines. Inquire now to get the best prices for our wide array of Cofta Original Monobloc products."
          />
        </Head>
      </>
    );
}