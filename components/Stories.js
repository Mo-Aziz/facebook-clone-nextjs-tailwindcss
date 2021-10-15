import StoryCard from "./StoryCard";

const stories = [
  // {
  //   name: "Elon Musk",
  //   src: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
  //   profile:
  //     "https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-mediumSquareAt3X.jpg",
  // },
  // {
  //   name: "Jimmy Carter",
  //   src: "https://www.gannett-cdn.com/presto/2019/11/05/USAT/a50720ea-6a90-4c13-adaa-4ea8c8f0331a-AP_Jimmy_Carter.JPG?crop=3608,2427,x0,y109",
  //   profile:
  //     "https://parade.com/wp-content/uploads/2018/08/carter-headshot.jpg",
  // },
  {
    name: "Mark ZuckerBerg",
    src: "https://assets.entrepreneur.com/content/3x2/2000/20160425134600-mark-zuckerberg-facebook-mobile-world-congress-ceo-technology-barcelona.jpeg?crop=4:3",
    profile:
      "https://yidinfo.net/wp-content/uploads/2021/09/GettyImages-1185336437-800x534-1.jpeg",
  },
  {
    name: "Bill Gates",
    src: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
    profile:
      "https://content.fortune.com/wp-content/uploads/2020/09/CNV.10.20.FORTUNE_BILL_AND_MELINDA_GATES_030.jpg",
  },
  {
    name: "Tony Robbins",
    src: "https://pbs.twimg.com/media/EbTyOssUEAE5KSg.jpg",
    profile:
      "https://cbsnews1.cbsistatic.com/hub/i/2018/04/09/f93592e3-35fc-46de-bc29-7c64b76408c1/tony-robbins-ap-408198959228.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
