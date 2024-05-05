import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Video } from "./Video";
import { createVideo, getVideos, updateVideo } from "./VideoService";
import { toast } from "react-toastify";
import { getVideo } from "./VideoService";
function VideoForm() {
  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  interface Params {
    id: string;
    [key: string]: string | undefined;
  }

  const navigate = useNavigate();
  const params = useParams<Params>();

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await createVideo(video);
      toast.success("New video added");
      setVideo(initialState);
    } else {
      await updateVideo(params.id, video);
    }

    navigate("/");
  };

  const selectVideo = async (id: string) => {
    const res = await getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) selectVideo(params.id);
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">New Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Write a description"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.description}
                  required
                ></textarea>
              </div>
              {params.id ? (
                <button className="btn btn-info">Updated Video</button>
              ) : (
                <button className="btn btn-primary">Create</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
