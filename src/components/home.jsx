const HomePage = () => {
    const buttons=['Podcast','Break up','Romance','Relax','Feel good','Energise','Commute','Party','Work out','Sad','focus','Sleep','asdf','qwer','erqw','wqef','wef','wefqwrf','rewfg','wrqrg','rgfwegetg','rgrgew','rghqeth','rwghqerger']
     const categories = [
      { title:'From the community',
      items:[
        { id: 1, name: 'Bhojpuri', image: 'https://i.ytimg.com/vi/CUFLws2mdqU/sddefault.jpg' },
        { id: 1, name: 'Love', image: 'https://i.ytimg.com/vi/EV5982RVl6w/sddefault.jpg' },
        { id: 1, name: 'All time fav', image: 'https://i.scdn.co/image/ab67616d00001e027131e4a0dd5e1ab9465402f4' },
        { id: 1, name: 'Travel songs', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8404fd89ab8064c32896fd0cdc' },
        { id: 1, name: 'Punjabi songs', image: 'https://i.ytimg.com/vi/qFqfAEqgWJ0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSX8A51S8SO3I2z67oxpol-8-a9g' },
        { id: 1, name: 'Bollywood', image: 'https://filmfare.wwmindia.com/content/2021/aug/bestbollywoodromanticmovies111628225128.jpg' },
        { id: 1, name: 'Coke studio favs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49ptbEiveccFGY30WZjjKmcCyLQVOvYqR7eo9Mova5SIReD9xyoQ-bIv2fsJbY36Yj74&usqp=CAU' },
        { id: 1, name: 'Remix', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84a90890beb385e42f4a404c62' },
        { id: 1, name: 'Romantic', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8413d51515bc467b344a9ff92f' },
        { id: 1, name: 'Heartbroken', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiINzmQsvu-j_kz80THDACZt1ZYWQUGNfB2A&s' },
        { id: 1, name: 'Sad', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPo5JmvRrS-qXLpE5Pk97HjF2CFIsbtd5y6A&s' },

      ],
    },
    {
      title:'Featured playlists for you',
      items: [
        { id: 2, name: 'Top trending', image: 'https://i.scdn.co/image/ab67616d00001e02f8e5ae8beea87ae7aaab4a61' },
        { id: 2, name: 'Presenting Nusrat Fateh Ali Khan', image: 'https://images.genius.com/2865831b5aac4db5f8a3a628f79464a2.682x682x1.jpg' },
        { id: 2, name: 'Bollywood Romance', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ec782462ad3e757fce6a1c11' },
        { id: 2, name: 'Best of Arijit ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOajyPHy_swtbdES9cPvAi_qaCrjVMRJLPag&s' },
        { id: 2, name: 'Sleep', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84049746c0252bdd53942373f7' },
        { id: 2, name: 'Morning vibes', image: 'https://i.scdn.co/image/ab67616d00001e026d9a831d8f926fef94e11594' },
        { id: 2, name: 'Kahin Deep Jalay', image: 'https://i.scdn.co/image/ab67616d00001e027131e4a0dd5e1ab9465402f4' },
        { id: 2, name: 'Bhakti bhajan', image: 'https://mosaic.scdn.co/300/ab67616d00001e02103890cd93d2c659fb899affab67616d00001e021b717966ea71ba176787db75ab67616d00001e02cb2b4d969106b396a21b4584ab67616d00001e02d0cc7891ad584beb8a3665a1' },
        { id: 2, name: 'Rap', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c06bf2f63b986a90b48bcd7c' },
        { id: 2, name: 'Podcasts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYm5TJ5WCWPxJ04zEPODUoihdQDcYHQvLcMA&s' },

      ]
    },

    {
      title:'My Playlist',
      items: [
        { id: 3, name: 'Liked songs', image: 'https://i.ytimg.com/vi/EV5982RVl6w/sddefault.jpg' },
        { id: 3, name: 'NFAK songs', image: 'https://i.scdn.co/image/ab67616d00001e023c206ee7701c775e4e5ae89e' },
        { id: 3, name: 'Sad songs', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8456084da1fab68718fcb43a60' },
        { id: 3, name: 'Bhojpuri vibes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVuRTJcKTWt85n60ZYZ0sAc2w7mlc0SqnEg&s' },
        { id: 3, name: 'Lo-Fi vibes', image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da843574e892eeac03ce11c15d30' },
        { id: 3, name: 'Rahat se Rahat', image: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2dZjkJ-default.jpg' },
        { id: 3, name: 'Bhajans', image: 'https://i.scdn.co/image/ab67616d0000b273bb1b1c961e8179965f78a0bc' },
        { id: 3, name: 'Hustle 4.0', image: 'https://i.scdn.co/image/ab67616d00001e02427cc74b786b4e7c0178e29d' },
        { id: 3, name: 'Aaj ki Raat', image: 'https://i.scdn.co/image/ab67616d0000b2735e16168f7e8ff4fb8aace6cf' },
        { id: 3, name: 'Ishq Bulaava', image: 'https://i.scdn.co/image/ab67616d0000b2732025db071cd9dd7e8023e01e'}
      ]
    },
    
     ]
    return(
      <div className="absolute ml-12 inset-x-0 top-0 mt-16">
        <div className=" bg-gradient-to-b from-black to-gray-900 min-h-screenp-2 w-full flex overflow-auto scrollbar-hide  whitespace-nowrap gap-1 space-x-4 border-b border-gray-300">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="py-2 px-3 text-sm bg-gray-950 text-white rounded-md hover:bg-gray-700 transition">
            {button}
          </button>
        ))}
        </div>

        {/*it is for the main section of the page like song detai*/}

        <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen text-white p-4 space-y-6">
      {categories.map((category, index) => (
        <div key={index}>
          <h2 className="text-lg font-semibold">{category.title}</h2>
          <div className="flex overflow-x-auto space-x-4 overflow-auto scrollbar-hide">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="w-40 flex-shrink-0  mt-6 rounded-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2">
                  <h3 className="text-sm place-items-center font-medium ">{item.name}</h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
      </div>
    )

  };
  
  export default HomePage;