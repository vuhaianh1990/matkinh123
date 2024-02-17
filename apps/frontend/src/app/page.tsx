import Image from 'next/image';

export default async function Home() {
  const data = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `{
  products {
    data {
      attributes {
        name
        quantity
        categories {
          data {
            attributes {
              name
            }
          }
        }
        colors {
          id
          color
        }
        attributes {
          ... on ComponentProductColor {
            color
          }
        }
      }
    },
    meta {
      pagination {
        page
        pageSize
        total
        pageCount
      }
    }
  }
}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  console.log({ data });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div></div>
    </main>
  );
}
