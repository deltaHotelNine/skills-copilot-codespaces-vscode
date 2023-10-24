function skillsMember() {
    return {
        restrict: 'E',
        templareUrl: 'modules/skills/view/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}