import { useState } from "react";
import "../css/Contact.css";

export const Contact = () => {
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "First Name", designation: "Designation 1", extension: "Extention 1", email: "Email 1" },
    { id: 2, name: "Second Name", designation: "Designation 2", extension: "Extention 2", email: "Email 2" },
    { id: 3, name: "Third Name", designation: "Designation 3", extension: "Extention 3", email: "Email 3" },
    { id: 4, name: "Fourth Name", designation: "Designation 4", extension: "Extention 4", email: "Email 4" },
    { id: 5, name: "Fifth Name", designation: "Designation 5", extension: "Extention 5", email: "Email 5" },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-nowrap justify-content-end align-items-center gap-2 download-search mt-2 ">
          <button className="pdf-btn fst-italic fw-bold pt-0">PDF FILE</button>
          <button className="exel-btn fst-italic fw-bold pt-0">EXEL FILE</button>
          <label htmlFor="Search" className="fw-bold">
            Search:
          </label>
          <input
            type="text"
            className="rounded-0 border-black border-1"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="t-color ">Name</th>
                <th className="t-color">Designation</th>
                <th className="t-color">Extention</th>
                <th className="t-color">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                    <td>{item.extension}</td>
                    <td>{item.email}</td>
                    {/* <td>
                      <button className="btn download-btn rounded-0 pt-0  text-decoration-underline">
                        Download
                      </button>
                    </td> */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
