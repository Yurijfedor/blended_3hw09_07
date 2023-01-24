const calculateTeamFinanceReport = (salaries, team) => {

    const specializationsList = Object.keys(salaries)
    const getBruttoSalary = (salary, tax) => (salary * parseInt(tax) / (100 - parseInt(tax))) + salary
    const getSalaryBySpecialization = (specialization) => specializationsList.includes(specialization) ? salaries[specialization].salary : null
    const getTaxBySpecialization = (specialization) => specializationsList.includes(specialization) ? salaries[specialization].tax : null
    const getTotalBudgetTeam = (teamList) => {
        const totalBudget = teamList.reduce((acc, { specialization }) => {
        const salary = getSalaryBySpecialization(specialization)
        const tax = getTaxBySpecialization(specialization)
        let bruttoSalary = specializationsList.includes(specialization) ? getBruttoSalary(salary, tax) : null
        return Math.round(acc += bruttoSalary)
        }, null)
        return totalBudget
    }

    const getTotalBudgetbySpecialization = (teamList, specializationName) => {
        const totalBudget = teamList.reduce((acc, { specialization }) => {
        const salary = getSalaryBySpecialization(specialization)
        const tax = getTaxBySpecialization(specialization)
        let bruttoSalary = specializationsList.includes(specialization) && specialization === specializationName ? getBruttoSalary(salary, tax) : null
        return Math.round(acc += bruttoSalary)
        }, null)
        return totalBudget
    }

    const totalBudgetTeam = getTotalBudgetTeam(team)
    const totalBudgetManager = getTotalBudgetbySpecialization(team, "Manager")
    const totalBudgetDesigner = getTotalBudgetbySpecialization(team, "Designer")
    const totalBudgetArtist = getTotalBudgetbySpecialization(team, "Artist")
    const totalBudgetTeamLead = getTotalBudgetbySpecialization(team, "TeamLead")
    const totalBudgetArchitect = getTotalBudgetbySpecialization(team, "Architect")

    const financeReport = {
        totalBudgetTeam,
        totalBudgetManager,
        totalBudgetDesigner,
        totalBudgetArtist,
        totalBudgetTeamLead,
        totalBudgetArchitect
    }

    return financeReport
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))

const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))



