import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <h3 className="mt-5">Client Info</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="me-2" />
          {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="me-2" />
          {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="me-2" />
          {client.phone}
        </li>
      </ul>
    </>
  );
}
