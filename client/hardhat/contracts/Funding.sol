// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Funding
{
    struct Campaign
    {
        uint id;
        address payable creator;
        string title;
        string description;
        uint goalAmt;
        uint currAmt;
        uint deadline;
        bool open;
    }

    Campaign[] public campaigns;

    event CampaignCreated(address indexed creator, string title, string description, uint goalAmt, uint deadline);

    modifier campaignValid(uint campaignId)
    {
        require(campaignId < campaigns.length, "Invalid campaign");
        _;
    }

    modifier ongoingCampaign(uint campaignId)
    {
        require(campaigns[campaignId].open == true, "Campaign has expired");
        _;
    }

    uint countId = 0;

    function createCampaign(string memory _title, string memory _description, uint _goalAmt, uint _deadline) external
    {
        countId+=1;
        Campaign memory newCampaign = Campaign({id: countId, creator: payable(msg.sender), title: _title, description: _description, goalAmt: _goalAmt, currAmt: 0, deadline: _deadline, open: true});
        campaigns.push(newCampaign);

        emit CampaignCreated(msg.sender, _title, _description, _goalAmt, _deadline);
    }

    function closeCampaign(uint campaignId) external campaignValid(campaignId)
    {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.open == true, "Campaign is already closed");
        require(campaign.currAmt >= campaign.goalAmt, "Goal amount not reached");
        
        campaign.open = false; //close campaign
    }

    function getCampaignCount() external view returns(uint)
    {
        return campaigns.length;
    }

    function getCamapaignDetails(uint campaignId) external view returns(address, string memory, string memory, uint, uint, uint, bool)
    {
        Campaign memory campaign = campaigns[campaignId];
        return (
            campaign.creator,
            campaign.title,
            campaign.description,
            campaign.goalAmt,
            campaign.currAmt,
            campaign.deadline,
            campaign.open
        );
    }
    
}