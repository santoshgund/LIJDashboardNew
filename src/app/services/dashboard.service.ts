export class DashboardService{
    applications=[
        {
            id:1, appName:"Sales Backend", appVersion:"4.4.1/41.6.1", installedOn:"7.7.2017",environmentName:"TS3-1 IS3 PROD (Fujitsu)"
        },
        {
            id:2, appName:"Service Pointd", appVersion:"4.4.1/40.2.4", installedOn:"7.7.2017",environmentName:"TS3-3 E2E-CAT (HSL)"
        },
        {
            id:3, appName:"CRM", appVersion:"4.4.1/41.0.1", installedOn:"7.7.2017",environmentName:"pre-SIT ENV1/test1"
        },
        {
            id:4, appName:"FAS", appVersion:"1.15.15", installedOn:"7.7.2017",environmentName:"TS3&IS3 SIT ENV4/test4"
        },
        {
            id:5, appName:"CPS", appVersion:"0.0.1", installedOn:"7.7.2016",environmentName:"TS3-3 E2E-CAT (HSL)"

        }
    ]
        environments=[
          {
            id:1, envName:"TS3-1 IS3 PROD (Fujitsu)", envDesc:"This is Prod Env", installedOn:"1.15.15 / 28.06.2017 Srirang"
          },
          {
            id:2, envName:"TS3-3 E2E-CAT (HSL)", envDesc:"End to End HSL CAT", installedOn:"1.15.15 / 23.06.2017 Santosh"
          },
          {
            id:3, envName:"TS3-1/IS3 - TS3-2/IS4 CAT (HSL)", envDesc:"HSL CAT", installedOn:"1.15.15 / 23.06.2017 Santosh"
          },
          {
            id:4, envName:"pre-SIT ENV1/test1", envDesc:"PRE-SIT HSL", installedOn:"1.15.13 / 17.05.2016 Santosh"
          },
          {
            id:5, envName:"TS3&IS3 SIT ENV4/test4", envDesc:"SIT HSL", installedOn:"1.15.15 / 22.06.2017 Santosh"
          },
      ]

    addNewApplication(name:string,desc:string,installedDate:string,envName:string){
        this.applications.push(
            {
                id:this.applications.length+1,
                appName:name, 
                appVersion:desc,
                installedOn: installedDate,
                environmentName: envName
            });
    }

    getAllApplications(){
        return this.applications;
    }

    getAllEnviroments(){
        return this.environments;
    }
}