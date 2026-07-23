import { useState } from "react";
import "../css/Manuals.css";

export const Manuals = () => {
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, title: "Row 1 Data" },
    { id: 2, title: "Row 2 Data" },
    { id: 3, title: "Row 3 Data" },
    { id: 4, title: "Row 4 Data" },
    { id: 5, title: "Row 5 Data" },
  ];

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
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
                <th className="t-color w-75">Title</th>
                <th className="t-color">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
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
