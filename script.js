//your code here
function startDragging(event)
	{
		event.dataTransfer.setData("ids", event.target.id);
	}

function allowDrop(event)
	{
		event.preventDefault();
	}

function dropped(event)
	{
		const dropContainerId = event.target.id;
		const dropContainerText = event.target.innerText;

		const containerDraggableId = event.dataTransfer.getData("ids");
		const containerDraggable = document.getElementById(containerDraggableId);
        const containerDraggableText = containerDraggable.innerText;

		containerDraggable.id = dropContainerId;
		containerDraggable.innerText = dropContainerText;

		event.target.id = containerDraggableId;
		event.target.innerText = containerDraggableText;
	}