import {
  Button,
  Card,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Download from "../assets/icons/download.png";
import {
  ButtonStyle,
  DivStyle,
  GridStyle,
  ImgStyle,
  PaginationButtonStyle,
  TableCellStyle,
} from "../styled/tableStyle";
import CircularProgress from "@mui/joy/CircularProgress";

const RampnowTable = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // gel call
  const fetchData = async (page = 1, limit = 10, setUserData) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://fe-test.dev.rampnow.io:8000/api/books?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setUserData(data.data);
      setCount(data.count);
      console.log(data, "00000");
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage, 10, setUserData);
  }, [currentPage]);

  useEffect(() => {
    setTotalPages(10);
  }, []);

  useEffect(() => {
    updateVisiblePages(currentPage);
  }, [currentPage]);

  const updateVisiblePages = (currentPage) => {
    const maxVisiblePages = 3;
    const maxLeft = Math.floor(maxVisiblePages / 2);
    const maxRight = Math.ceil(maxVisiblePages / 2);
    let startPage = currentPage - maxLeft;
    let endPage = currentPage + maxRight;

    if (startPage <= 0) {
      startPage = 1;
      endPage = Math.min(totalPages, maxVisiblePages);
    }

    if (endPage > totalPages) {
      startPage = Math.max(totalPages - maxVisiblePages + 1, 1);
      endPage = totalPages;
    }

    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
    setVisiblePages(pages);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function convertToCSV(data) {
    const header = Object.keys(data[0]).join(",") + "\n";
    const body = data
      .map((item) => Object.values(item).join(",") + "\n")
      .join("");
    return header + body;
  }

  // Function to initiate CSV download
  function downloadCSV() {
    const csvData = convertToCSV(userData);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "userData.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div>
      <GridStyle>
        <Card>
          <Grid>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              {loading && (
                <CircularProgress
                  variant="solid"
                  style={{
                    textAlign: "center",
                    height: "100vh",
                    width: "150vh",
                  }}
                />
              )}
              <TableContainer sx={{ maxHeight: 640 }}>
                <Table
                  stickyHeader
                  aria-label="sticky table"
                  sx={{ height: "85vh" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCellStyle fontWeight>ID</TableCellStyle>
                      <TableCellStyle fontWeight>Author</TableCellStyle>
                      <TableCellStyle fontWeight>Country</TableCellStyle>
                      <TableCellStyle fontWeight>Language</TableCellStyle>
                      <TableCellStyle fontWeight>Link</TableCellStyle>
                      <TableCellStyle fontWeight>Pages</TableCellStyle>
                      <TableCellStyle fontWeight>Title</TableCellStyle>
                      <TableCellStyle fontWeight>Year</TableCellStyle>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((book) => (
                      <TableRow key={book.id}>
                        <TableCellStyle padding>{book.id + 1}</TableCellStyle>
                        <TableCellStyle padding>{book.author}</TableCellStyle>
                        <TableCellStyle padding>{book.country}</TableCellStyle>
                        <TableCellStyle padding>{book.language}</TableCellStyle>
                        <TableCellStyle padding>{book.link}</TableCellStyle>
                        <TableCellStyle padding>{book.pages}</TableCellStyle>
                        <TableCellStyle padding>{book.title}</TableCellStyle>
                        <TableCellStyle padding>{book.year}</TableCellStyle>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <DivStyle>
                <Grid item>
                  <Typography>
                    Showing {currentPage} to {currentPage * totalPages} of{" "}
                    {count} entries
                  </Typography>
                </Grid>
                <Grid>
                  <ButtonStyle onClick={downloadCSV}>
                    <ImgStyle src={Download}></ImgStyle>Export as CSV
                  </ButtonStyle>
                </Grid>
                <Grid>
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    &lt;
                  </Button>
                  {visiblePages.map((page) => (
                    <PaginationButtonStyle
                      key={page}
                      onClick={() => handlePageChange(page)}
                      variant={currentPage === page ? "contained" : "outlined"}
                    >
                      {page}
                    </PaginationButtonStyle>
                  ))}
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    &gt;
                  </Button>
                </Grid>
              </DivStyle>
            </Paper>
          </Grid>
        </Card>
      </GridStyle>
    </div>
  );
};

export default RampnowTable;
