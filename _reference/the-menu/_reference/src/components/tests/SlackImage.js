import Image from 'next/image'

function SlackImage({ slackUrl }) {
  return (
    <div style={{width: "50%", height: "50vh", overflow: "hidden", objectFit: "cover"}}>
      <Image
        src={slackUrl}
        alt="My Image"
        // width="500"
        // height="500"
        fill="true"
      />
    </div>
  );
}

export default SlackImage