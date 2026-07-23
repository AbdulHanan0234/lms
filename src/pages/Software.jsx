import { useState } from "react";
import "../css/Software.css";

export const Software = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      title: "First Name",
      category: "64 bit Window Based",
      version: "7.0.1",
    },
    {
      id: 2,
      title: "Second Name",
      category: "32 bit Window Based",
      version: "7.0.2",
    },
    {
      id: 3,
      title: "Third Name",
      category: "64 bit Window Based",
      version: "8.0.0",
    },
    {
      id: 4,
      title: "Fourth Name",
      category: "32 bit Window Based",
      version: "7.0.3",
    },
    {
      id: 5,
      title: "Fifth Name",
      category: "64 bit Window Based",
      version: "182.51",
    },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(search.toLowerCase()),
    ),
  );

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-nowrap justify-content-end align-items-center gap-2 download-search mt-2 ">
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
                <th className="t-color ">Title</th>
                <th className="t-color">Category</th>
                <th className="t-color ">Version/Date</th>
                <th className="t-color">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>{item.version}</td>
                    <td>
                      <a
                        href="https://theuselessweb.com/"
                        class="button"
                        target="_blank"
                      >
                        <strong>Download</strong>
                      </a>
                    </td>
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
