import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UDPATE_PROJECT } from "../mutations/projectMutation";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UDPATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECTS, variables: { id: project.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "") {
      alert("Please fill in all fields");
    }

    updateProject(name, description, status);
  };

  return (
    <div className="mt-5">
      <h3>Edit Project</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            aria-label="Default select example"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">New</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
