import { Link } from "react-router-dom";
import { KTCard, KTCardBody } from "../../_metronic/helpers";
import { Content } from "../../_metronic/layout/components/content";

const users = [
  {
    id: 1,
    tanggalLahir: "20-01-2024",
    alamat: "Jember",
    active: false,
    pendidkan: "SMA 1 Jember",
  },
  {
    id: 2,
    tanggalLahir: "20-01-2024",
    alamat: "Jember",
    active: true,
    pendidkan: "SMA 2 Jember",
  },
];

const TestPage = () => {
  return (
    <>
      <Content>
        <KTCard>
          <KTCardBody className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-8 mt-5">
              <h1 className="mb-0 text-capitalize">Daftar Users</h1>
            </div>
            <div className="table-responsive">
              <table
                id="kt_table_users"
                className="table align-middle table-row-dashed gy-5 table-striped table-responsive"
              >
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-center text-muted fw-bolder fs-7 text-uppercase gs-0 ">
                      No
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      TanggalLahir
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      alamat
                    </th>

                    <th className="text-center text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Status Penerimaan
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      pendidkan
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0 text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                {users.map((card, index) => (
                  <tbody key={card.id}>
                    <td className="text-center py-1">{index + 1}</td>
                    <td className="py-1">{card.tanggalLahir}</td>
                    <td className="py-1">{card.alamat}</td>
                    <td className="py-1 text-center">
                      {card.active ? (
                        <span className="badge bg-success text-white fs-8 fw-bold p-2">
                          Di Terima
                        </span>
                      ) : (
                        <span className="badge bg-danger text-white fs-8 fw-bold p-2">
                          Di Tolak
                        </span>
                      )}
                    </td>

                    <td className="py-1">{card.pendidkan}</td>

                    <td className="py-1">
                      <div className="d-flex gap-3 justify-content-center align-items-center text-center">
                        <Link
                          to={"/"}
                          className="btn btn-success p-4 d-flex justify-content-center align-items-center text-center"
                        >
                          View
                        </Link>
                      </div>
                    </td>
                  </tbody>
                ))}
              </table>
            </div>
            {/* <UsersListPagination />
            {isLoading && <UsersListLoading />} */}
          </KTCardBody>
        </KTCard>
      </Content>
    </>
  );
};

export default TestPage;
