
export interface Props {
  src: string;
  title: string;
}

function VideoComponent(props: Props) {
  console.log("teste");
  return (
    <div class="flex justify-center items-center h-screen ">
      <div class="w-3/4 max-w-screen-lg">
        <h2>{props.title}</h2>
        <video
          class="w-full"
          src={props.src}
          controls={true}
          height={800}
          width={800}
          autoPlay
        />
      </div>
    </div>
  );
}

export default VideoComponent;
