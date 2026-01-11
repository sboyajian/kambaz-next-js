export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ maxWidth: "800px" }}>
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={9}
        cols={50}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
      />
      <br />
      <p></p>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option selected value="EXAMS">
                  EXAMS
                </option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
                <option selected value="Complete/Incomplete">
                  Complete/Incomplete{" "}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="In-person">In-person</option>
              </select>
              <p></p>
              <label htmlFor="wd-online-entry-options">
                Online Entry Options
              </label>
              <br></br>
              <input type="checkbox" name="check-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-entry"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recording</label>
              <br />
              <input
                type="checkbox"
                name="check-entry"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Studint Annotation</label>
              <br />
              <input type="checkbox" name="check-entry" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Upload</label>
              <p></p>
              <td>
                <label htmlFor="wd-assign-to">Assign To</label>
                <br></br>
                <input placeholder="Everyone" id="wd-assign-to" /> <br />
              </td>
              <p></p>
              <td>
                <label htmlFor="wd-due-date">Due Date</label>
                <br></br>
                <input type="date" defaultValue="2026-01-11" id="wd-due-date" />
              </td>
              <p></p>
              <td>
                <label htmlFor="wd-available-from">Available From</label>
                <br></br>
                <input
                  type="date"
                  defaultValue="2026-01-11"
                  id="wd-available-from"
                />
              </td>
              <td>
                <label htmlFor="wd-until">Until</label>
                <br></br>
                <input type="date" defaultValue="2026-01-11" id="wd-until" />
              </td>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ textAlign: "right", marginTop: "12px" }}>
        <button id="wd-cancel" style={{ marginRight: 8 }}>
          Cancel
        </button>
        <button id="wd-save">Save</button>
      </div>
    </div>
  );
}
