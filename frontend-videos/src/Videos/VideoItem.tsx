import { Video } from "./Video";
import ReactPlayer from "react-player";
import "./VideoItem.css";
import { useNavigate } from "react-router-dom";
import { deleteVideo } from "./VideoService";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card video-card" style={{ cursor: "pointer" }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1
              className="mb-0"
              onClick={() => navigate(`/update/${video._id}`)}
            >
              {video.title}
            </h1>
            <button
              className="btn btn-danger"
              onClick={() => video._id && handleDelete(video._id)}
            >
              X
            </button>
          </div>
          <p>{video.description}</p>
          <div className="video-player-wrapper">
            <ReactPlayer
              url={video.url}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
