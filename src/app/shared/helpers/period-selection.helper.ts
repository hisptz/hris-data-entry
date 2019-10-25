export function getPeriodsBasedOnType(periodType, year) {
    switch (periodType) {
        case 'Monthly':
            return _getMonthlyPeriods(year);
        case 'Quarterly':
            return _getQuarterlyPeriods(year);
        case 'Yearly':
            return getYearlyPeriods(year);
        case 'RelativeMonth':
            return _getRelativeMonthPeriods();
        case 'RelativeQuarter':
            return _getRelativeQuarterPeriods();
        case 'RelativeYear':
            return _getRelativeYearPeriods();
        default:
            return [];
    }
}
export function _getMonthlyPeriods(year) {
    const periods = [{id: year + '12', name: 'December ' + year}, {id: year + '11', name: 'November ' + year}, {
        id: year + '10',
        name: 'October ' + year
    }, {id: year + '09', name: 'September ' + year}, {id: year + '08', name: 'August ' + year}, {
        id: year + '07',
        name: 'July ' + year
    }, {id: year + '06', name: 'June ' + year}, {id: year + '05', name: 'May ' + year}, {
        id: year + '04',
        name: 'April ' + year
    }, {id: year + '03', name: 'March ' + year}, {id: year + '02', name: 'February ' + year}, {
        id: year + '01',
        name: 'January ' + year
    }];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentPeriod = currentDate.getFullYear() + (currentMonth < 10 ? ('0' + currentMonth) : currentMonth).toString();
    return periods.map((period) => {
        return {
            ...period,
            type: 'Monthly',
        };
    }).filter((period) => parseInt(period.id, 10) <= parseInt(currentPeriod, 10));
}
export function  _getQuarterlyPeriods(year) {
    const periods = [{id: year + 'Q4', name: 'October - December ' + year}, {
        id: year + 'Q3',
        name: 'July - September ' + year
    }, {id: year + 'Q2', name: 'April - June ' + year}, {
        id: year + 'Q1',
        name: 'January - March ' + year
    }];

    return periods.map((period: any) => {
        period.type = 'Quarterly';
        return period;
    });
}

export function getYearlyPeriods(year) {
    const periods = [];
    for (let i = 0; i <= 10; i++) {
        const useYear = parseInt(year, 10) - i;
        periods.push({id: useYear.toString(), name: useYear.toString(), type: 'Yearly'});
    }

    return periods;
}

export function _getRelativeMonthPeriods() {
    const periods = [{id: 'THIS_MONTH', name: 'This Month'}, {id: 'LAST_MONTH', name: 'Last Month'}, {
        id: 'LAST_3_MONTHS',
        name: 'Last 3 Months'
    }, {id: 'LAST_6_MONTHS', name: 'Last 6 Months'}, {id: 'LAST_12_MONTHS', name: 'Last 12 Months'}];

    return periods.map((period: any) => {
        period.type = 'RelativeMonth';
        return period;
    });
  }

export function  _getRelativeQuarterPeriods() {
    const periods = [{id: 'THIS_QUARTER', name: 'This Quarter'}, {
        id: 'LAST_QUARTER',
        name: 'Last Quarter'
    }, {id: 'LAST_4_QUARTERS', name: 'Last 4 Quarters'}];

    return periods.map((period: any) => {
        period.type = 'RelativeQuarter';
        return period;
    });
}

export function _getRelativeYearPeriods() {
    const periods = [{id: 'THIS_YEAR', name: 'This Year'}, {
        id: 'LAST_YEAR',
        name: 'Last Year'
    }, {id: 'LAST_5_YEARS', name: 'Last 5 Years'}];

    return periods.map((period: any) => {
        period.type = 'RelativeYear';
        return period;
    });

}

export function sortPeriodBasedonId(periods) {
    return periods.sort((a, b) => {
        return b.id - a.id;
      });
}
