// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Updates a visible value for the confidence range slider custom
 * form element.
 *
 * @module registrationrule_stopforumspam/confidence_range_slider
 * @copyright 2024 Catalyst IT Europe {@link https://www.catalyst-eu.net}
 *            2024 eDaktik GmbH {@link https://www.edaktik.at/}
 *            2024 lern.link GmbH {@link https://lern.link/}
 *            2024 University of Strathclyde {@link https://www.strath.ac.uk}
 * @author    Dale Davies <dale.davies@catalyst-eu.net)
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Update the supplied output element with a percentage value based
 * off the value from the supplied range slider element.
 *
 * @param {HTMLElement} slider
 * @param {HTMLElement} output
 */
let updateOutputValue = (slider, output) => {
    output.innerHTML = slider.value + '%';
};

export const init = (elementid) => {
    let slider = document.getElementById(elementid);
    let output = document.getElementById(elementid + '-value');
    updateOutputValue(slider, output);
    slider.addEventListener('input', updateOutputValue.bind(null, slider, output));
};
