import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Nyati Cement Blog';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
          }}
        >
          <div
            style={{
              marginTop: 30,
              marginLeft: 50,
              marginRight: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Logo */}
            <img
              src={new URL('../../public/images/lake-cement-ltd.png', import.meta.url).toString()}
              alt="Nyati Cement"
              width="200"
              height="80"
              style={{ marginBottom: 20 }}
            />
            
            {/* Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: 60,
                  fontFamily: 'system-ui',
                  fontWeight: 700,
                  color: '#1e293b',
                  lineHeight: 1.1,
                  marginBottom: 20,
                  textAlign: 'center',
                }}
              >
                {params.title || 'Nyati Cement Blog'}
              </h1>
              
              {/* Subtitle */}
              <p
                style={{
                  fontSize: 30,
                  fontFamily: 'system-ui',
                  color: '#64748b',
                  marginTop: 0,
                  textAlign: 'center',
                }}
              >
                Building Knowledge, Building Trust
              </p>
            </div>
          </div>
          
          {/* Bottom decoration */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 10,
              background: '#F97316',
            }}
          />
        </div>
      ),
      {
        ...size,
        // Using system fonts instead of loading custom fonts
        fonts: []
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
